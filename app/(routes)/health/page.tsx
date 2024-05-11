'use client';

import React, { useState } from 'react';
import { healthData, HealthData } from '@/data/diahorreah';
import { ArrowUpOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  DatePicker,
  Dropdown,
  Empty,
  Menu,
  Row,
  Statistic,
} from 'antd';
import type { DatePickerProps } from 'antd';
import dayjs from 'dayjs';

const items = [
  { key: 'Diahorreah', label: 'Diahorreah' },
  { key: 'Malaria', label: 'Malaria' },
  { key: 'Dengue', label: 'Dengue' },
];

const HealthDataTable: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2076');
  const [selectedDisease, setSelectedDisease] = useState<string>('Diahorreah');

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    if (typeof dateString === 'string') {
      setSelectedYear(dateString);
    }
  };

  const onMenuClick = (e: any) => {
    setSelectedDisease(e.key);
  };

  const disabledDate = (current: dayjs.Dayjs) => {
    return current && (current.year() < 2070 || current.year() > 2079);
  };

  // Filter the health data based on the selected year and disease
  const filteredData = healthData.filter(
    (item) =>
      item.Year === selectedYear && item.Indicators.includes(selectedDisease),
  );

  return (
    <div style={{ margin: '20px' }}>
      <div className="flex w-full justify-between">
        <Dropdown
          overlay={<Menu items={items} onClick={onMenuClick} />}
          placement="bottomLeft"
          className="mb-5"
        >
          <Button>{selectedDisease}</Button>
        </Dropdown>

        <DatePicker
          onChange={onChange}
          picker="year"
          disabledDate={disabledDate}
          defaultValue={dayjs(selectedYear, 'YYYY')}
          className="mb-5"
          format="YYYY"
        />
      </div>
      {filteredData.length > 0 ? (
        filteredData.map((item: HealthData, index: number) => (
          <Row gutter={16} key={index} style={{ marginBottom: '20px' }}>
            <Col span={24}>
              <Card bordered={false}>
                <Statistic
                  title={item.Indicators}
                  value={item.National}
                  precision={0}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="cases"
                />
              </Card>
            </Col>
            {Object.keys(item)
              .filter(
                (key) =>
                  key !== 'Year' && key !== 'Indicators' && key !== 'National',
              )
              .map((province) => (
                <Col span={8} key={province}>
                  <Card bordered={false} className="mt-3">
                    <Statistic
                      title={province}
                      value={item[province as keyof HealthData]}
                      precision={0}
                      valueStyle={{ color: '#234069' }}
                      suffix="cases"
                    />
                  </Card>
                </Col>
              ))}
          </Row>
        ))
      ) : (
        <Empty className="mt-30" />
      )}
    </div>
  );
};

export default HealthDataTable;
