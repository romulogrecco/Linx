namespace AvaliacaoLinx.Domain.ValueObjects;

public class Endereco
{
    public string Cep { get; private set; }
    public string Logradouro { get; private set; }
    public string Bairro { get; private set; }
    public string Cidade { get; private set; }
    public string Estado { get; private set; }

    public Endereco(string cep, string logradouro, string bairro, string cidade, string estado)
    {
        Cep = cep;
        Logradouro = logradouro;
        Bairro = bairro;
        Cidade = cidade;
        Estado = estado;
    }
}
