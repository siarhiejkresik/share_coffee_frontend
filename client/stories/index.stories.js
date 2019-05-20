import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

import TopicDescription from "../src/TopicDescription";
import TopicEditor from "../src/TopicEditor";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
// Topic description
const onChangeCallback = renderedHtml => console.log(renderedHtml);
const data = `<h3 class="md-block-header-three">Hello! This is header!</h3>
<p class="md-block-unstyled">This is a <strong class="md-inline-bold">bold</strong> text.</p>
<p class="md-block-unstyled">This is a <span class="md-inline-highlight">highlighted</span> text.</p>
<p class="md-block-unstyled">This is a <u class="md-inline-underline">underline</u> text.</p>`;
storiesOf("Topic description", module)
  .add("read-only with text", () => <TopicDescription data={data} />)
  .add("read-only without text", () => <TopicDescription />)
  .add("editable with text", () => (
    <TopicDescription data={data} editable={true} onChange={onChangeCallback} />
  ))
  .add("editable without text", () => (
    <TopicDescription editable={true} onChange={onChangeCallback} />
  ));
// Topic editor
storiesOf("Topic editor", module).add("topic editor", () => <TopicEditor />);
