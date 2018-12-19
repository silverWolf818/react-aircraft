/**
 * @author zhouzh
 * @date 2018-12-19 22:52
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style';

class Login extends Component {
  render() {
    return (
     <LoginWrapper>
       <LoginBox>
         <Input placeholder="账号"/>
         <Input placeholder="密码"/>
         <Button>登录</Button>
       </LoginBox>
     </LoginWrapper>
    )
  }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState,mapDispatch)(Login);

