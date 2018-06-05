import React from 'react';
import { getRandomNumber } from './utils';
import '../../css/tabs.css';

class Tabs extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      tabs: new Map(),
      currentTab: null
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props === state.prevProps) return state;
    const tabsIntoState = (acc, tab) => acc.set(tab.type.name, { name: tab.type.name, element: tab, isActive: false });
    state.tabs = props.children.reduce(tabsIntoState, new Map());
    state.currentTab = Array.from(state.tabs)[getRandomNumber(props.children.length)][0];
    state.tabs.get(state.currentTab).isActive = true;
    state.prevProps = props;
    return state;
  }

  toggleTab = (newTab) => {
    const { tabs, currentTab } = this.state;
    tabs.get(currentTab).isActive = false;
    tabs.get(newTab).isActive = true;
    this.setState({ tabs, currentTab: newTab });
  }

  render() {
    const { tabs, currentTab } = this.state;
    const getNavTab = ({ name, isActive }) => (
      <span
        key={name}
        className={`nav-tab ${isActive ? 'active' : 'inactive'}`}
        onClick={() => !isActive && this.toggleTab(name)}
      >
        { name }
      </span>
    );
    return (
      <div>
        <header className="nav-bar">
          { Array.from(tabs).map(tab => getNavTab(tab[1])) }
        </header>
        <main>
          { tabs.get(currentTab).element }
        </main>
      </div>
    );
  }
}

export default Tabs;
