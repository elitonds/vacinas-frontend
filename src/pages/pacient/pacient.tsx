import { Button, DatePicker, Divider, Form, Input, Select } from "antd";
import { MaskedInput } from "antd-mask-input";
import { useState } from "react";
import Card from "../../components/card/card";
import { Gender } from "../../dto/menu/gender/gender";
import cpfMask from "../../utils/cpfMask";

interface Props {}

const Pacient: React.FC<Props> = () => {
  const { Item } = Form;
  const { Option } = Select;

  const [cpf, setCpf] = useState("");

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    console.log();
  };

  const configBirthDate = {
    rules: [
      {
        type: "object" as const,
        required: true,
        message: "O campo data de nascimento é obrigatório",
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
          <Divider orientation="left">Dados pessoais</Divider>
          <Item
            name="pacient-name"
            className="col-md-6"
            rules={[{ required: true, message: "O campo nome é obrigatório" }]}
          >
            <Input id="name" placeholder="Nome" maxLength={200} />
          </Item>
          <Item className="col-md-6" name="birthdate" {...configBirthDate}>
            <DatePicker
              id="birthdate"
              className="w-100"
              placeholder="Data de nascimento"
            />
          </Item>
          <Item
            className="col-md-6"
            name="gender"
            rules={[{ required: true, message: "O campo sexo é obrigatório" }]}
          >
            <Select id="gender" showSearch placeholder="Sexo">
              {Object.entries(Gender).map((gender) => {
                return (
                  <Option key={gender[0]} value={gender[0]}>
                    {gender[1]}
                  </Option>
                );
              })}
            </Select>
          </Item>
          <Item
            className="col-md-6"
            name="document"
            rules={[
              { pattern: /\d{3}\.\d{3}\.\d{3}-\d{2}/, message: "CPF inválido" },
            ]}
          >
            <MaskedInput
              mask="000.000.000-00"
              id="document"
              placeholder="CPF"
            />
          </Item>
          <Item
            name="mother-name"
            className="col-md-6"
            rules={[{ required: true, message: "O campo mãe é obrigatório" }]}
          >
            <Input id="mother-name" placeholder="Mãe" maxLength={200} />
          </Item>
          <Item name="father-name" className="col-md-6">
            <Input id="father-name" placeholder="Pai" maxLength={200} />
          </Item>
          <Divider orientation="left">Contato</Divider>
          
          <Item name="email" className="col-md-6">
            <Input id="email" placeholder="E-mail" maxLength={150} />
          </Item>
          <Item className="col-md-12" style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit">
              Cadastrar
            </Button>
          </Item>          
        </Form>
      </Card>
    </>
  );
};

export default Pacient;
