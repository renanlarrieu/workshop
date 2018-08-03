import React from 'react';
import ReactDOM from 'react-dom';

// Components
import ToolBar from './ToolBar';
import Button from '../Button';
import Icon from '../Icon';

class HoverMenu extends React.Component {

  // this.renderMarkButton = this.renderMarkButton.bind(this);
  // this.onClickMark = this.onClickMark.bind(this);

  render() {
    const { className, innerRef } = this.props
    const root = window.document.getElementById('root')

    return ReactDOM.createPortal(
      <ToolBar className={className} innerRef={innerRef}>
        {this.renderMarkButton('bold', 'bold')}
        {this.renderMarkButton('italic', 'italic')}
        {this.renderMarkButton('underline', 'underline')}
      </ToolBar>,
      root
    )
  }

  renderMarkButton(type, icon) {
    const { value } = this.props
    const isActive = value.activeMarks.some(mark => mark.type == type)
    return (
      <Button
        type={"toolbar"}
        active={isActive}
        action={event => this.onClickMark(event, type)}
        contents={<Icon name={icon}/>}/>
    )
  }

  onClickMark(event, type) {
    const { value, onChange } = this.props
    event.preventDefault()
    const change = value.change().toggleMark(type)
    onChange(change)
  }
}

export default HoverMenu;