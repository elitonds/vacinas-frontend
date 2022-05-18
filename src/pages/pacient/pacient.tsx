import Card from "../../components/card/card";

interface Props {}

const Pacient: React.FC<Props> = () => {
  return (
    <>
      <Card title="Cadastro de paciente" className="d-flex">
        <div className="col-md-6">Teste</div>
        <div className="col-md-6">Teste</div>
        <p>Paciente</p>
      </Card>
    </>
  );
};

export default Pacient;
