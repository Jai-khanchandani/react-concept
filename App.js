const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "Child1" }, [
      React.createElement(
        "h1",
        { id: "heading1" },
        "Hello from splitted and nested React with h1!"
      ),
      React.createElement(
        "h2",
        { id: "heading2" },
        "Hello from splitted and nested React with h2!"
      ),
    ])
  ),
  React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "Child2" }, [
      React.createElement(
        "h1",
        { id: "heading1" },
        "Hello from splitted and nested React with h1!"
      ),
      React.createElement(
        "h2",
        { id: "heading2" },
        "Hello from splitted and nested React with h2!"
      ),
    ])
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
