import { Button, DatePicker, Form, Input } from "antd";
import Card from "../../components/card/card";

interface Props {}

const Pacient: React.FC<Props> = () => {
  const { Item } = Form;

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const configBirthDate = {
    rules: [
      {
        type: "object" as const,
        required: true,
        message: "Data de nascimento é obrigatória",
      },
    ],
  };

  return (
    <>
      <Card title="Cadastro de paciente">
        <Form
          name="form-pacients"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="d-flex row"
        >
          <Item
            name="pacient-name"
            label="Nome"
            className="col-md-6"
            rules={[{ required: true, message: "Nome é obrigatório" }]}
          >
            <Input />
          </Item>
          <Item className="col-md-6" name="birth-date" label="Data de nascimento" {...configBirthDate}>
            <DatePicker className="w-100"/>
          </Item>
          <Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Item>
        </Form>
      </Card>
    </>
  );
};

export default Pacient;
