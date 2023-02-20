using AvaliacaoLinx.Application.Services;
using AvaliacaoLinx.Application.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace AvaliacaoLinx.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly IClienteServiceApplication _clienteServiceApplication;

        public ClienteController(IClienteServiceApplication clienteServiceApplication)
        {
            _clienteServiceApplication = clienteServiceApplication;
        }

        [HttpGet]
        public async Task<IActionResult> ObterTodos()
        {
            return Ok(await _clienteServiceApplication.ObterTodos());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ObterPorId(Guid id)
        {
            return Ok(await _clienteServiceApplication.ObterPorId(id));
        }

        [HttpPost]
        public async Task<IActionResult> Adicionar(ClienteViewModel clienteViewModel)
        {
            await _clienteServiceApplication.Adicionar(clienteViewModel);
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> Atualizar(ClienteViewModel clienteViewModel)
        {
            await _clienteServiceApplication.Atualizar(clienteViewModel);
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> Remover(ClienteViewModel clienteViewModel)
        {
            await _clienteServiceApplication.Remover(clienteViewModel);
            return Ok();
        }
    }
}
