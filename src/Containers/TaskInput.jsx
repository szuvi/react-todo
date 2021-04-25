import * as React from 'react';
import PropTypes from 'prop-types';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Row from '../Components/Row';

function TaskInput({ addTask }) {
  const [name, setName] = React.useState('');
  const textInput = React.useRef(null);

  React.useEffect(() => textInput.current.focus(), []);

  const handleChange = ({ target: { value } }) => setName(value);

  const handleAdd = () => {
    if (name.length > 0) {
      addTask(name);
      setName('');
    }
    textInput.current.focus();
  };

  const handleKeypress = ({ code }) => {
    if (code === 'Enter') {
      handleAdd();
    }
  };

  return (
    <Row align="right">
      <Input
        ref={textInput}
        onKeyPress={handleKeypress}
        value={name}
        onChange={handleChange}
        placeholder="Input task"
      />
      <Button onClick={handleAdd}>Add</Button>
    </Row>
  );
}

TaskInput.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskInput;
