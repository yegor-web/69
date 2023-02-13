import './Main_module.sass';
import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

const Main = () => {
  // const data = useSelector(state => state.authReducer)
  const [eID, setId] = useState(0);
  // const dispatch = useDispatch();
  const [res, setRes] = useState([]);
  const URL = "http://185.244.172.108:8081/v1/outlay-rows/entity/create";
  useEffect(() => {
    axios.post(URL).then(data => setId(data.data.id))
    // dispatch(getId())
  }, []);

  useMemo(() => {
    axios.get(`http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/list`)
      .then(data => setRes(data.data))
  }, [eID]);
  console.log(res);
  return (
    <>
      <div className="section">
        <div className="level">
          <h3>Уровень</h3>
        </div>
        <div className="work">
          <h3>Наименование работ</h3>
        </div>
        <div className="salary">
          <h3>Основная з/п</h3>
        </div>
        <div className="salary">
          <h3>Оборудование</h3>
        </div>
        <div className="salary">
          <h3>Накладные расходы</h3>
        </div>
        <div className="salary">
          <h3>Сметная прибыль</h3>
        </div>
      </div>
      {(res) ? res.map(i => <p>{i}</p>) : <h1>Нет постов</h1>}
    </>
  );
};

export default Main;