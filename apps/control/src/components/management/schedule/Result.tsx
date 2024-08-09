import React, { useState } from 'react';
import { DataType } from '../../../pages/management/schedule/SchMPage';
import { Button, Table, Input, Form } from 'antd';
import CommonModal from '../../common/CommonModal';
import styles from './Result.module.scss';
interface PropsType {
  title: string;
  data: DataType;
}

const Result = ({ title, data }: PropsType) => {
  const [form] = Form.useForm();
  const [modalTitle, setModalTitle] = useState('');
  const [isEditing, setIsEditing] = useState(false); // FIXME: check Remove this
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModalEditing = () => {
    setModalTitle(title + ' 수정하기');
    setIsEditing(true);
    setIsModalOpen(true);
    form.setFieldsValue(data); // 폼에 초기값 설정
  };
  const showModalAdding = () => {
    setModalTitle(title + ' 추가하기');
    setIsModalOpen(true);
    form.resetFields(); // 폼 초기화
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleApply = () => {
    // TODO: save data to server
    // form.submit();
    console.log('Success:');
    setIsModalOpen(false);
  };

  // TODO: 조회 common 컴포넌트꺼 사용! - 롤편성조회 화면 지우기

  const onFinish = (values: any) => {
    console.log('Success:', values);
    setIsModalOpen(false);
  };

  // For Table
  // columns 설정
  const columns = [
    {
      title: 'Key',
      dataIndex: 'key',
    },
    {
      title: 'Value',
      dataIndex: 'value',
    },
  ];

  // dataSource로 변환
  const dataSource = Object.keys(data).map((key) => ({
    key: key,
    value: data[key],
  }));

  return (
    <div className={styles.result}>
      <p>{title}</p>
      <Table
        style={{ borderRadius: '5px' }}
        pagination={false}
        columns={columns}
        dataSource={dataSource}
      />
      <div className={styles.resultBtns}>
        <Button onClick={showModalEditing}>수정</Button>
        <Button onClick={showModalAdding}>추가</Button>
      </div>
      <CommonModal
        title={modalTitle}
        isModalOpen={isModalOpen}
        onCancel={handleCancel}
        onApply={handleApply}
      >
        <Form
          form={form}
          name={modalTitle}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 8,
          }}
          style={{
            maxWidth: 300,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          {Object.keys(data).map((key) => {
            return (
              <div key={key}>
                <p style={{ fontWeight: 'bold' }}>{key}</p>
                <Form.Item name={key.trim()}>
                  <Input
                    type="text"
                    addonAfter={key == '소둔온도' ? '°C' : 'mm'}
                  />
                </Form.Item>
              </div>
            );
          })}
        </Form>
      </CommonModal>
    </div>
  );
};

export default Result;
