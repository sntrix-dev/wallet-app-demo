import React from "react";
import { userData, UserData } from "../data/userData";

let initialUserState: number = 0;

const userContextWrapper = (component?: React.Component) => ({
  user: initialUserState,
  setUserData: (userId: number) => {
    initialUserState = userId;
    component?.setState({ context: userContextWrapper(component) });
  },
});

type Context = ReturnType<typeof userContextWrapper>;

interface State {
  context: Context;
}

export const UserContext = React.createContext<Context>(userContextWrapper());

export class UserContextProvider extends React.Component<{
  children: React.ReactNode;
}> {
  state: State = {
    context: userContextWrapper(this),
  };

  render() {
    return (
      <UserContext.Provider value={this.state.context}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
