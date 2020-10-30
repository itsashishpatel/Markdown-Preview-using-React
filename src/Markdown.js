import React, { Component } from 'react';
import marked from 'marked';


  const renderer = new marked.Renderer();
  
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
  }
    
  const Editor = (props) => {
    return (
      <textarea id="editor"
         rows="5" cols="50" value={props.input}
        onChange={props.onChange}
        type="text"> </textarea>
      )
  }
  
  const Preview = (props) => {
    return (
       <div id="preview" dangerouslySetInnerHTML={{__html: marked(props.input, { renderer: renderer })}} />
      )
  }

  marked.setOptions({
    breaks: true,
  });
  
  const inputText = `# H1 
  ## H2
  LINK  [links](https://www.freecodecamp.com)
  Inline Code, \`<div></div>\`
  Code Block 
  \`\`\`
  // this is multi-line code:
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  - List Item
  > Stay Fearless
  > Learn from past and forget
  **BOLDTEXT**
  Image:
  ![React Logo w/ Text](https://goo.gl/Umyytc)
  `
export default class Markdown extends Component{
    constructor(props) {
        super(props);
        this.state = {
          input: inputText
        };
         
      }
      
      handleChange(event) {
        this.setState({
            input: event.target.value
        });
      }
      
      render() {
    return (
          <div>
            <h3>Simple React Markdown Previewer</h3>
            <Editor input={this.state.input}
              onChange={this.handleChange.bind(this)}/>
            <Preview input={this.state.input}/>
          </div>
         
        );
      }
}