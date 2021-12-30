import React, { useState } from 'react'
import { Form, Input, Button, InputNumber, Mentions } from 'antd';
import { PlusOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Option } = Mentions;
const { Title, Text, Link, Paragraph } = Typography;

function IntroToAntD() {
    const [editableStr, setEditableStr] = useState('This is an editable text.');

    const onFinish = (e) => {
        console.log(e);
    }

    function onChange(value) {
        console.log('changed', value);
    }

    function onChangeMention(value) {
        console.log('Change:', value);
    }

    function onSelect(option) {
        console.log('select', option);
    }


    return (
        <div style={{ marginLeft: 200 }}>
            {/* buttons */}
            <h3>Buttons:-----------------</h3>
            <Button type="primary">Click Me</Button><br />
            <Button type="dashed" size="large" loading>hello</Button><br />
            <Button type="danger" size="large">Don't Click Here</Button><br />
            <Button type="danger" size="large" disabled>Don't Click Here</Button><br />

            {/* icons */}
            <h3>Icons:--------------</h3>
            <Button type="primary" size="large">
                <PlusOutlined />Click
            </Button><br />

            {/* Typography */}
            <h3>Typography:---------------</h3>
            <h5>title:--------- </h5>
            <Title>h1. Ant Design</Title>
            <Title level={2}>h2. Ant Design</Title>
            <Title level={3}>h3. Ant Design</Title>

            <h5>text:---------</h5>
            <Text type="secondary">secondary</Text><br />
            <Text type="success" mark>success</Text><br />
            <Text type="warning" disabled>warning</Text><br />

            <h5>Link:---------</h5>
            <Link href="https://ant.design" target="_blank">
                Ant Design (Link)
            </Link>

            <h1>Paragraph:----------</h1>
            <Paragraph copyable>{editableStr}</Paragraph>
            <Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph>




            {/* form */}
            <h3>form:-------</h3>
            <Form onFinish={onFinish}>
                <Form.Item label="User Name" name="username">
                    <Input placeholder="User name" required />
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input placeholder="Password" required />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>


            {/* inputNumber */}
            <h3>inputNumber:---</h3>
            <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />

            {/* Mentions */}
            <h3>Mentions</h3>
            <Mentions
                style={{ width: '100%' }}
                onChange={onChangeMention}
                onSelect={onSelect}
                defaultValue="@afc163"
            >
                <Option value="ashutosh">ashutosh</Option>
                <Option value="sambhu">sambhu</Option>
                <Option value="sagar">sagar</Option>
            </Mentions>


        </div>
    )
}

export default IntroToAntD
