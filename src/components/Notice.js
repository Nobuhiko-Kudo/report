import React from 'react';
import {connect} from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import {notice} from '../redux/actions';
import '../css/page.css'

const mapStateToProps = state => {
  return {notices: state.notice};
};

const Notice = ({notices, notice}) => {
  return (
    <div className="page-body">
      <h3>お知らせ</h3>
      <ListGroup>
        {
          notices.map((data) =>
            <ListGroup.Item>{data.date}  {data.title}</ListGroup.Item>
          )
        }
      </ListGroup>
      <a className="float-right" href="#">お知らせ一覧はこちら</a>
    </div>
  );
};

export default connect(mapStateToProps, notice)(Notice);