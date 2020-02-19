import React from "react";

const allClasses = {
  isActive: "is-active",
  isBlack: "is-black",
  isCentered: "is-centered",
  isDanger: "is-danger",
  isDark: "is-dark",
  isFocused: "is-focused",
  isGrouped: "is-grouped",
  isHovered: "is-hovered",
  isInfo: "is-info",
  isInverted: "is-inverted",
  isLarge: "is-large",
  isLight: "is-light",
  isLink: "is-link",
  isLoading: "is-loading",
  isMedium: "is-medium",
  isOutlined: "is-outlined",
  isPrimary: "is-primary",
  isRight: "is-right",
  isRounded: "is-rounded",
  isSelected: "is-selected",
  isSmall: "is-small",
  isStatic: "is-static",
  isSuccess: "is-success",
  isText: "is-text",
  isWarning: "is-warning",
  isWhite: "is-white"
};

const Navbar = () => {
  return (
    <nav className="navbar is-light">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>

        <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="https://bulma.io/">
            Home
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const FormField = props => {
  console.log(props);
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input
          className="input"
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

const CoolButton = props => {
  console.log(props);

  let classes = "button ";
  if (props.className) {
    classes += props.className + " ";
  }

  let allProps = Object.keys(props);

  for (let  prop of allProps) {
    if (allClasses[prop]) {
      console.log(allClasses[prop]);
      classes += allClasses[prop] + " ";
    }
  }

  console.log(classes);

  return <button className={classes}>{props.children}</button>;
};

const Message = props => {
  let classes = "message ";
  let allProps = Object.keys(props);
  for (let prop of allProps) {
    if (allClasses[prop]) {
      console.log(allClasses[prop]);
      classes += allClasses[prop] + " ";
    }
  }

  return (
    <article className={classes}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">{props.children}</div>
    </article>
  );
};

const Signup = () => {
  return (
    <div>
      <Navbar />
      <FormField label="name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="email" type="email" placeholder="alex@smith.com" />
      <FormField label="password" type="password" placeholder="password123" />
      <CoolButton isSmall isSuccess>
        Submit
      </CoolButton>
    </div>
  );
};

const Container = () => (
  <div>
    <Navbar />
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField
      label="Email"
      type="email"
      placeholder="e.g. alexsmith@gmail.com"
    />
    <CoolButton isSmall isDanger className="is-rounded my-class">
      Button 1
    </CoolButton>
    <CoolButton isSmall isSuccess>
      Button 2
    </CoolButton>
    <Signup />
    <Message isInfo title="Hello World">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
      <strong>Pellentesque risus mi</strong>.
    </Message>
  </div>
);

const App = () => {
  return (
    <div>
      <Container />
    </div>
  );
};

export default App;
