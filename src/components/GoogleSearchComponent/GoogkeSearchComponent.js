import React from "react";
import styles from "./styles.module.css";

class GoogleSearchComponent extends React.Component {
  render() {
    if (!this.props.addSearchAddress.length) {
      return this.renderAddButton();
    }
    return (
      <ul className={styles["note-list"]}>
        {this.props.addSearchAddress.map((note, index) => {
          return (
            <li key={index}>
              {this.renderNote(note)}
              {this.renderAddButton(index)}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default GoogleSearchComponent;
