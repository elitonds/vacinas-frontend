import { Button, Checkbox, Divider, Form, Input, Select } from "antd";
import Card from "../../components/card/card";
import DateField from "../../components/date-field/date-field";
import { Gender } from "../../dto/gender/gender";
import { cellphoneMask, cepMask, cpfMask } from "../../utils/masks";
import { cepPattern, cpfPattern, phonePattern } from "../../utils/patterns";

interface Props {}

const Pacient: React.FC<Props> = () => {
  const { Item } = Form;
  const { Option } = Select;
  const { TextArea } = Input;
  const [form] = Form.useForm();

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
          name="pacient-form"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="d-flex row"
          form={form}
        >
          <Divider orientation="left">Dados pessoais</Divider>
          <Item
            name="pacient-name"
            className="col-md-6"
            rules={[{ required: true, message: "O campo nome é obrigatório" }]}
          >
            <Input id="name" placeholder="Nome" maxLength={200} allowClear />
          </Item>
          <Item className="col-md-6" name="birthdate" {...configBirthDate}>
            <DateField
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
            <Select id="gender" showSearch placeholder="Sexo" allowClear>
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
            normalize={(value) => {
              return cpfMask(value);
            }}
            rules={[
              {
                pattern: cpfPattern,
                message: "CPF inválido",
              },
            ]}
          >
            <Input
              id="document"
              placeholder="CPF"
              onChange={(e) => console.log(form)}
              allowClear
            />
          </Item>
          <Item
            name="mother-name"
            className="col-md-6"
            rules={[{ required: true, message: "O campo mãe é obrigatório" }]}
          >
            <Input
              id="mother-name"
              placeholder="Mãe"
              maxLength={200}
              allowClear
            />
          </Item>
          <Item name="father-name" className="col-md-6">
            <Input
              id="father-name"
              placeholder="Pai"
              maxLength={200}
              allowClear
            />
          </Item>

          <Divider orientation="left">Contato</Divider>

          <Item name="email" className="col-md-6">
            <Input id="email" placeholder="E-mail" type="email" maxLength={150} allowClear />
          </Item>
          <Item
            name="landline"
            className="col-md-6"
            rules={[
              {
                pattern: phonePattern,
                message: "Celular inválido",
              },
            ]}
            normalize={(value) => {
              return cellphoneMask(value);
            }}
          >
            <Input
              id="landline"
              placeholder="Telefone fixo"
              allowClear
              maxLength={14}
            />
          </Item>
          <Item
            name="cellphone"
            className="col-md-6"
            rules={[
              {
                pattern: phonePattern,
                message: "Celular inválido",
              },
            ]}
            normalize={(value) => {
              return cellphoneMask(value);
            }}
          >
            <Input
              id="cellphone"
              placeholder="Celular"
              maxLength={15}
              allowClear
            />
          </Item>
          <Item name="check-whatsapp" className="col-md-6">
            <Checkbox id="check-whatsapp">Receber Whatsapp</Checkbox>
          </Item>

          <Divider orientation="left">Endereço</Divider>

          <Item
            className="col-md-2"
            name="postal-code"
            rules={[{ pattern: cepPattern, message: "CEP inválido" }]}
            normalize={(value) => {
              return cepMask(value);
            }}
          >
            <Input id="postal-code" placeholder="CEP" allowClear />
          </Item>
          <Item name="adress" className="col-md-8">
            <Input id="adress" placeholder="Endereço" allowClear />
          </Item>
          <Item className="col-md-2" name="number">
            <Input id="number" placeholder="Nº" allowClear />
          </Item>
          <Item name="district" className="col-md-4">
            <Input id="district" placeholder="Bairro" allowClear />
          </Item>
          <Item name="city" className="col-md-4">
            <Input id="city" placeholder="Cidade" allowClear />
          </Item>
          <Item name="state" className="col-md-4">
            <Select id="state" showSearch placeholder="UF" allowClear />
          </Item>

          <Divider orientation="left">Sobre a saúde do paciente</Divider>

          <Item name="fever" className="col-md-12">
            <Checkbox id="fever">Teve febre nas últimas 24 horas</Checkbox>
          </Item>
          <Item
            name="any-disease-related"
            className="col-xl-4 col-lg-4 col-md-12"
          >
            <TextArea
              rows={3}
              id="any-disease-related"
              placeholder="Possui alguma doença relacionada ao sistema imune?"
              allowClear
            />
          </Item>
          <Item
            name="any-alergical-reaction-vaccine"
            className="col-xl-4 col-lg-4 col-md-12"
          >
            <TextArea
              rows={3}
              id="any-alergical-reaction-vaccine"
              placeholder="Já teve alguma reação alérgica a alguma vacina? Qual?"
              allowClear
            />
          </Item>
          <Item
            name="any-recent-vaccination"
            className="col-xl-4 col-lg-4 col-md-12"
          >
            <TextArea
              rows={3}
              id="any-recent-vaccination"
              placeholder="Realizou alguma vacinação nos últimos 30 dias? Qual?"
              allowClear
            />
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
