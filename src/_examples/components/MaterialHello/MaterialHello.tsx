import * as React from 'react';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import AccessAlarmIcon from 'material-ui-icons/AccessAlarm';

const MaterialHello = () => (
  <div>
    <TextField label="Say hello" margin="normal" />
    <br />
    Font icon
    <Icon color="primary">add_circle</Icon>
    <br />
    Svg icon
    <AccessAlarmIcon color="primary" />
  </div>
);

export default MaterialHello;
