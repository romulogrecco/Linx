using AutoMapper;
using AvaliacaoLinx.Application.ViewModels;
using AvaliacaoLinx.Domain.Aggregates;
using AvaliacaoLinx.Domain.Repositories;

namespace AvaliacaoLinx.Application.Services;

public class ClienteServiceApplication : IClienteServiceApplication
{
    private readonly IClienteRepository _clienteRepository;
    private readonly IMapper _mapper;

    public ClienteServiceApplication(IClienteRepository clienteRepository, IMapper mapper)
    {
        _clienteRepository = clienteRepository;
        _mapper = mapper;
    }

    public async Task<IEnumerable<ClienteViewModel>> ObterTodos()
    {
        return _mapper.Map<IEnumerable<ClienteViewModel>>(await _clienteRepository.ObterTodos());
    }

    public async Task<ClienteViewModel> ObterPorId(Guid id)
    {
        return _mapper.Map<ClienteViewModel>(await _clienteRepository.ObterPorId(id));
    }

    public async Task Adicionar(ClienteViewModel clienteViewModel)
    {
        var cliente = _mapper.Map<Cliente>(clienteViewModel); 
        _clienteRepository.Adicionar(cliente);

        await _clienteRepository.UnitOfWork.CommitAsync();
    }

    public async Task Atualizar(ClienteViewModel clienteViewModel)
    {
        var cliente = _mapper.Map<Cliente>(clienteViewModel);
        _clienteRepository.Atualizar(cliente);

        await _clienteRepository.UnitOfWork.CommitAsync();
    }

    public async Task Remover(ClienteViewModel clienteViewModel)
    {
        var cliente = _mapper.Map<Cliente>(clienteViewModel);
        _clienteRepository.Remover(cliente);

        await _clienteRepository.UnitOfWork.CommitAsync();
    }
    public void Dispose()
    {
        _clienteRepository?.Dispose();
    }
}
