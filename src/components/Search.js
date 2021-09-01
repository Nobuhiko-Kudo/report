import React from 'react'
import {Jumbotron, Form, Row, Col, Button, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'
import WeeklyDatePicker from './editor/WeeklyDatePicker'
import MonthlyDatePicker from './editor/MonthlyDatePicker'
import WorkLocationSelect from './editor/WorkLocationSelect'

const TargetWeek = () => (
  <Form.Group as={Row}>
    <Form.Label column sm={2}>対象週</Form.Label>
    <Col sm={10}>
      <WeeklyDatePicker/>
    </Col>
  </Form.Group>
);

const TargetMonth = () => (
 <Form.Group as={Row}>
    <Form.Label column sm={2}>対象月</Form.Label>
    <Col sm={10}>
      <MonthlyDatePicker />
    </Col>
  </Form.Group>
);

const Search = (props) => {
  return (
  <div className='page-body'>
    <Jumbotron>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>グループ</Form.Label>
          <Col sm={10}><Form.Control as="select">
            <option>A グループ</option>
            <option>B グループ</option>
            <option>C グループ</option>
            <option>D グループ</option>
          </Form.Control></Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>氏名</Form.Label>
          <Col sm={10}><Form.Control type="text" placeholder="Name" /></Col>
        </Form.Group>
        {
          props.isTarget === "week"
          ? <>
            <TargetWeek/>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>勤務地</Form.Label>
              <Col sm={10}>
                <WorkLocationSelect/>
              </Col>
            </Form.Group>
            </>
          : <>
            <TargetMonth/>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>使用した技術</Form.Label>
              <Col sm={10}><Form.Control type="text" placeholder="Git" /></Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>担当した工程</Form.Label>
              <Col sm={10}><ToggleButtonGroup type="checkbox" className="mb-2">
                <ToggleButton variant="outline-primary" className="job-role" value={1}>要件定義</ToggleButton>
                <ToggleButton variant="outline-primary" className="job-role" value={2}>設計</ToggleButton>
                <ToggleButton variant="outline-primary" className="job-role" value={3}>実装</ToggleButton>
                <ToggleButton variant="outline-primary" className="job-role" value={4}>テスト</ToggleButton>
                <ToggleButton variant="outline-primary" className="job-role" value={5}>運用保守</ToggleButton>
                <ToggleButton variant="outline-primary" className="job-role" value={6}>分析</ToggleButton>
                <ToggleButton variant="outline-primary" className="job-role" value={7}>研修</ToggleButton>
                <ToggleButton variant="outline-primary" className="job-role" value={8}>構築</ToggleButton>
                <ToggleButton variant="outline-primary" className="job-role" value={9}>障害対応</ToggleButton>
              </ToggleButtonGroup></Col>
            </Form.Group>
            </>
          }
        <Button variant="primary" type="submit">
          検索
        </Button>
      </Form>
    </Jumbotron>
  </div>
  );
};

export default Search;
