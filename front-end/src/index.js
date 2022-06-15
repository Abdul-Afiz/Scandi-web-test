import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql",
});

// const productQuery = gql`
//   query {
//     category(input: { title: "clothes" }) {
//       name
//       products {
//         id
//         name
//         inStock
//         category
//         brand
//         description
//         gallery
//         prices {
//           currency {
//             label
//             symbol
//           }
//           amount
//         }
//         attributes {
//           id
//           name
//           type
//           items {
//             displayValue
//             value
//             id
//           }
//         }
//       }
//     }
//   }
// `;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />;
      </ApolloProvider>
    </Provider>
  </BrowserRouter>
);
