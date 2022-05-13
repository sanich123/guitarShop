import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { tabs } from '../../../utils/const';
import { typeChanger } from '../../../utils/utils';

interface PropertiesProps {
  vendorCode: string,
  stringCount: number,
  description: string,
  type: string,
  id?: string
}

export default function Properties({vendorCode, stringCount, description, type, id}: PropertiesProps) {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const tab = params.get('description');

  const [activeTab, setActiveTab] = useState(tab);
  console.log(activeTab);
  const isChar = activeTab === tabs.char ? 'button--black-border' : '';
  const isDesc = activeTab === tabs.desc ? 'button--black-border' : '';

  return (
    <div className="tabs">
      <a
        className={`button ${isDesc} button--medium tabs__button`}
        href="#description"
        onClick={() => {
          navigate(`/guitar/${id}?description=${tabs.char}`);
          setActiveTab(tabs.char);
        }}
      >
        Характеристики
      </a>
      <a
        className={`button ${isChar} button--medium tabs__button`}
        href="#description"
        onClick={() => {
          navigate(`/guitar/${id}?description=${tabs.desc}`);
          setActiveTab(tabs.desc);
        }}
      >
        Описание
      </a>
      <div className="tabs__content" id="characteristics">
        {activeTab === tabs.char && (
          <table className="tabs__table">
            <tbody>
              <tr className="tabs__table-row">
                <td className="tabs__title">Артикул:</td>
                <td className="tabs__value">{vendorCode}</td>
              </tr>
              <tr className="tabs__table-row">
                <td className="tabs__title">Тип:</td>
                <td className="tabs__value">{typeChanger(type)}</td>
              </tr>
              <tr className="tabs__table-row">
                <td className="tabs__title">Количество струн:</td>
                <td className="tabs__value">{stringCount} струнная</td>
              </tr>
            </tbody>
          </table>
        )}
        {activeTab === tabs.desc && (
          <p className="tabs__product-description">{description}</p>
        )}
      </div>
    </div>
  );
}


