import React from "react";
import PropTypes from "prop-types";

import { Editor, createEditorState } from "medium-draft";
import { exportToHtml, importFromHtml } from "./helpers.js";

import "medium-draft/lib/index.css"; // TODO: change styles from default to project styles
import styles from "./styles.module.scss";

const EDITOR_PLACEHOLDER = "Write a topic description...";

class TopicDescription extends React.Component {
  constructor(props) {
    super(props);

    const data = props.data;
    const editorState = data ? importFromHtml(data) : createEditorState();
    this.state = { editorState };

    this.onChange = this.onChange.bind(this);
  }

  onChange(editorState) {
    this.setState({ editorState }, () => {
      if (this.props.onChange) {
        const renderedHTML = exportToHtml(this.state.editorState);
        console.log(renderedHTML);
        this.props.onChange(renderedHTML);
      }
    });
  }

  render() {
    const editable = this.props.editable === true || false;
    const editableClass = editable ? styles.desc_editor__editable : "";
    const placeholder = editable ? EDITOR_PLACEHOLDER : "";

    return (
      <div className={`${styles.desc_editor} ${editableClass}`}>
        <Editor
          editorEnabled={editable}
          editorState={this.state.editorState}
          placeholder={placeholder}
          sideButtons={[]}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

TopicDescription.propTypes = {
  data: PropTypes.string,
  editable: PropTypes.bool,
  onChange: PropTypes.func,
};

export default TopicDescription;
