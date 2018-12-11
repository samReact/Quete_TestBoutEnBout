import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ItemDetails from './components/ItemDetails';
import ItemList from './components/ItemList';
import { API_ROOT_PATH, ITEMS_ROOT_PATH } from './pathConstants';

const itemsRootQuery = `${API_ROOT_PATH}${ITEMS_ROOT_PATH}/`;

class App extends React.Component {
  state = { items: [] };

  async componentDidMount() {
    const response = await fetch(itemsRootQuery);
    const { items } = await response.json();
    this.setState({ items });
  }

  render() {
    const { items } = this.state;

    return (
      <Switch>
        <Route exact path="/" render={() => <ItemList items={items} />} />
        <Route
          path="/items/:id"
          render={({ match }) => {
            const item =
              items.find(_item => _item.id === match.params.id) || {};
            const pickedProperties = (({
              shortName,
              inflatedPrice,
              largestImageUrl,
            }) => ({
              shortName,
              inflatedPrice,
              imageUrl: largestImageUrl,
            }))(item);
            return <ItemDetails {...pickedProperties} />;
          }}
        />
      </Switch>
    );
  }
}

export default App;
