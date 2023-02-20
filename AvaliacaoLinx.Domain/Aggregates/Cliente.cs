using AvaliacaoLinx.Domain.ValueObjects;

namespace AvaliacaoLinx.Domain.Aggregates;

public class Cliente : AggregateRoot
{
    public string Nome { get; private set; }
    public string Cpf { get; private set; }
    public Endereco Endereco { get; private set; }

    public Cliente()
    {

    }

    public Cliente(string nome, string cpf, string cep, string logradouro, string bairro, string cidade, string estado)
    {
        Nome = nome;
        Cpf = cpf;
        Endereco = new Endereco(cep, logradouro, bairro, cidade, estado);
    }
}
