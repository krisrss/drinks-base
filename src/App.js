import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DrinkDetails from './components/DrinkDetails';
import HomePage from './pages/HomePage';
import IngredientsPage from './pages/IngredientsPage';
import Page from './components/Page.js';

const App = () => {
    console.warn = () => { };
    return (
        <>
            <Switch>
                <Route
                    path="/ingredients/:ing1/:ing2/:ing3"
                    render={(props) => (
                        <Page title={`[${props.match.params.ing1}, ${props.match.params.ing2}, ${props.match.params.ing3}] Results from Drinks Base`}>
                            <IngredientsPage {...props} />
                        </Page>
                    )}
                />

                <Route
                    path="/ingredients/:ing1/:ing2"
                    render={(props) => (
                        <Page title={`[${props.match.params.ing1}, ${props.match.params.ing2}] Results from Drinks Base`}>
                            <IngredientsPage {...props} />
                        </Page>
                    )}
                />

                <Route
                    path="/ingredients/:ing1"
                    render={(props) => (
                        <Page title={`[${props.match.params.ing1}] Results from Drinks Base`}>
                            <IngredientsPage {...props} />
                        </Page>
                    )}
                />

                <Route
                    path="/ingredients"
                    render={(props) => (
                        <Page title={'Drinks Base - Search by Ingredients'}>
                            <IngredientsPage {...props} />
                        </Page>
                    )}
                />

                <Route
                    path="/details/:drinkId"
                    render={(props) => (
                        <Page title={`${props.location.state.drink.strDrink} Recipe`}>
                            <DrinkDetails {...props} />
                        </Page>
                    )}
                />

                <Route
                    path="/:urlTerm"
                    render={(props) => (
                        <Page title={`[${props.match.params.urlTerm}] Results from Drinks Base`}>
                            <HomePage {...props} />
                        </Page>
                    )}
                />

                <Route
                    path="/"
                    render={(props) => (
                        <Page title={'Drinks Base - Search by Name'}>
                            <HomePage {...props} />
                        </Page>
                    )}
                />
            </Switch>
        </>
    );
};

export default App;