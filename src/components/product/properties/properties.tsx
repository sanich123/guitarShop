import { useState } from 'react';
import { tabs } from '../../../utils/const';
import { typeChanger } from '../../../utils/utils';

interface PropertiesProps {
  vendorCode: string,
  stringCount: number,
  description: string,
  type: string
}

export default function Properties({vendorCode, stringCount, description, type}: PropertiesProps) {
  const [activeTab, setActiveTab] = useState(tabs.char);
  const isChar = activeTab === tabs.char ? 'button--black-border' : '';
  const isDesc = activeTab === tabs.desc ? 'button--black-border' : '';

  return (
    <div className="tabs">
      <a
        className={`button ${isDesc} button--medium tabs__button`}
        href="#description"
        onClick={() => setActiveTab(tabs.char)}
      >Характеристики
      </a>
      <a
        className={`button ${isChar} button--medium tabs__button`}
        href="#description"
        onClick={() => setActiveTab('description')}
      >Описание
      </a>
      <div className="tabs__content" id="characteristics">
        {activeTab === tabs.char &&
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
        </table>}
        {activeTab === tabs.desc && <p className="tabs__product-description">{description}</p>}
      </div>
    </div>
  );
}


