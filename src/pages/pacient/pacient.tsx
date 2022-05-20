import {
  Button,
  Checkbox,
  DatePicker,
  Divider,
  Form,
  Input,
  Select,
} from "antd";
import { MaskedInput } from "antd-mask-input";
import Card from "../../components/card/card";
import DateField from "../../components/date-field/date-field";
import { Gender } from "../../dto/menu/gender/gender";
import cpfMask from "../../utils/cpfMask";

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
            <Input id="name" placeholder="Nome" maxLength={200} />
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
              { pattern: /\d{3}\.\d{3}\.\d{3}-\d{2}/, message: "CPF inválido", transform: function(value){
                return cpfMask(value);
              }},
            ]}
          >
            <Input
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
          <Item name="landline" className="col-md-6">
            <Input id="landline" placeholder="Telefone fixo" />
          </Item>
          <Item name="cellphone" className="col-md-6">
            <Input id="cellphone" placeholder="Celular" />
          </Item>
          <Item name="check-whatsapp" className="col-md-6">
            <Checkbox id="check-whatsapp">Receber Whatsapp</Checkbox>
          </Item>

          <Divider orientation="left">Endereço</Divider>

          <Item
            className="col-md-2"
            name="postal-code"
            rules={[{ pattern: /\d{5}-\d{3}/, message: "CEP inválido" }]}
          >
            <MaskedInput mask="00000-000" id="postal-code" placeholder="CEP" />
          </Item>
          <Item name="adress" className="col-md-8">
            <Input id="adress" placeholder="Endereço" />
          </Item>
          <Item className="col-md-2" name="number">
            <Input id="number" placeholder="Nº" />
          </Item>
          <Item name="district" className="col-md-4">
            <Input id="district" placeholder="Bairro" />
          </Item>
          <Item name="city" className="col-md-4">
            <Input id="city" placeholder="Cidade" />
          </Item>
          <Item name="state" className="col-md-4">
            <Select id="state" showSearch placeholder="UF" />
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
