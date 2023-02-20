using AvaliacaoLinx.Domain;
using AvaliacaoLinx.Domain.Aggregates;
using AvaliacaoLinx.Domain.Repositories;
using AvaliacaoLinx.Infra.Contexts;
using Microsoft.EntityFrameworkCore;

namespace AvaliacaoLinx.Infra.Repositories;

public class ClienteRepository : IClienteRepository
{
    private readonly AvaliacaoLinxContext _context;

    public ClienteRepository(AvaliacaoLinxContext context)
    {
        _context = context;
    }
    public IUnitOfWork UnitOfWork => _context;

    public async Task<IEnumerable<Cliente>> ObterTodos()
    {
        return await _context.Clientes.AsNoTracking().ToListAsync();
    }

    public async Task<Cliente> ObterPorId(Guid id)
    {
        return await _context.Clientes.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
    } 

    public void Adicionar(Cliente cliente)
    {
       _context.Clientes.Add(cliente);
    }

    public void Atualizar(Cliente cliente)
    {
        _context.Clientes.Update(cliente);
    }

    public void Remover(Cliente cliente)
    {
        _context.Clientes.Remove(cliente);
    }

    public void Dispose()
    {
        _context?.Dispose();
    }
}
