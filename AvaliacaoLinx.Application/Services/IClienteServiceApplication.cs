using AvaliacaoLinx.Application.ViewModels;

namespace AvaliacaoLinx.Application.Services;

public interface IClienteServiceApplication : IDisposable
{
    Task<IEnumerable<ClienteViewModel>> ObterTodos();
    Task<ClienteViewModel> ObterPorId(Guid id);
    Task Adicionar(ClienteViewModel clienteViewModel);
    Task Atualizar(ClienteViewModel clienteViewModel);
    Task Remover(ClienteViewModel clienteViewModel);
}
