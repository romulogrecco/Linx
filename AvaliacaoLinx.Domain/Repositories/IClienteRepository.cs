using AvaliacaoLinx.Domain.Aggregates;

namespace AvaliacaoLinx.Domain.Repositories;

public interface IClienteRepository : IRepository<Cliente>
{
    Task<IEnumerable<Cliente>> ObterTodos();
    Task<Cliente> ObterPorId(Guid id);
    
    void Adicionar(Cliente cliente);
    void Atualizar(Cliente cliente);
    void Remover(Cliente cliente);
}
