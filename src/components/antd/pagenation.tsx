// import React from 'react';
// import { Table } from 'antd';
// import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface DataType {
  key: string;
  name: string;
  date: string;
  address: string;
  charger: string;
  kwh: string;
  price: string;
  //   tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: '사용자',
    dataIndex: 'name',
    key: 'name',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: '날짜',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '충전소',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '충전기',
    dataIndex: 'charger',
    key: 'charger',
  },
  {
    title: '충전량',
    dataIndex: 'kwh',
    key: 'kwh',
  },
  {
    title: '요금',
    dataIndex: 'price',
    key: 'price',
  },
  //   {
  //     title: 'Tags',
  //     key: 'tags',
  //     dataIndex: 'tags',
  //     render: (_, { tags }) => (
  //       <>
  //         {tags.map((tag) => {
  //           let color = tag.length > 5 ? 'geekblue' : 'green';
  //           if (tag === 'loser') {
  //             color = 'volcano';
  //           }
  //           return (
  //             <Tag color={color} key={tag}>
  //               {tag.toUpperCase()}
  //             </Tag>
  //           );
  //         })}
  //       </>
  //     ),
  //   },
  //   {
  //     title: 'Action',
  //     key: 'action',
  //     render: (_, record) => (
  //       <Space size="middle">
  //         <a>Invite {record.name}</a>
  //         <a>Delete</a>
  //       </Space>
  //     ),
  //   },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    date: '2023-11-10/15:57',
    address: '화성시 퍼스트 운송',
    charger: '0',
    kwh: '0',
    price: '0',
    // tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    date: '2023-11-10/15:57',
    address: '화성시 퍼스트 운송',
    charger: '0',
    kwh: '0',
    price: '0',
    // tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    date: '2023-11-10/15:57',
    address: '화성시 퍼스트 운송',
    charger: '0',
    kwh: '0',
    price: '0',
    // tags: ['cool', 'teacher'],
  },
];

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  const getColumnSearchProps = (dataIndex: any) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`${dataIndex} 검색`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            검색
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            리셋
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: any) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value: any, record: any) =>
      record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
    onFilterDropdownOpenChange: (visible: any) => {
      if (visible) {
        // 이것은 필터 드롭다운이 나타날 때 검색을 리셋하는 기능입니다.
        setSearchText('');
        setSearchedColumn(dataIndex);
      }
    },
  });

  const handleSearch = (selectedKeys: any, confirm: any, dataIndex: any) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: any) => {
    clearFilters();
    setSearchText('');
  };

  const columnsWithFilter = columns.map((col) => {
    if (col.dataIndex) {
      return {
        ...col,
        ...getColumnSearchProps(col.dataIndex),
      };
    }
    return col;
  });

  return <Table columns={columnsWithFilter} dataSource={data} />;
};

export default App;
