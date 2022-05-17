import { useLocation, useNavigate } from 'react-router-dom';
import { Guitar } from '../../../types/types';
import { rusEngTabs, tabs } from '../../../utils/const';
import { getTypeInRus } from '../../../utils/utils';

interface PropertiesProps extends Pick<Guitar, 'vendorCode' | 'stringCount' | 'description' | 'type'> {
  id?: string
}

export default function Properties({vendorCode, stringCount, description, type, id}: PropertiesProps) {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const activeTab = params.get(tabs.desc);

  return (
    <div className="tabs">
      {Object
        .entries(rusEngTabs)
        .map(([eng, rus]) => (
          <a
            key={eng}
            className={`button ${activeTab !== eng ? 'button--black-border' : ''} button--medium tabs__button`}
            href="#description"
            onClick={() => navigate(`/guitar/${id}?${tabs.desc}=${eng}`)}
          >
            {rus}
          </a>
        ))}

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
                <td className="tabs__value">{getTypeInRus(type)}</td>
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


