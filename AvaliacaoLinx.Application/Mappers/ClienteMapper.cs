using AutoMapper;
using AvaliacaoLinx.Application.ViewModels;
using AvaliacaoLinx.Domain.Aggregates;

namespace AvaliacaoLinx.Application.Mappers;

public class ClienteMapper : Profile
{
	public ClienteMapper()
	{
		CreateMap<Cliente, ClienteViewModel>()
			.ForMember(d => d.Id, o => o.MapFrom(s => s.Id))
			.ForMember(d => d.Nome, o => o.MapFrom(s => s.Nome.ToUpper()))
			.ForMember(d => d.Cpf, o => o.MapFrom(s => s.Cpf))
            .ForMember(d => d.Cep, o => o.MapFrom(s => s.Endereco.Cep))
            .ForMember(d => d.Logradouro, o => o.MapFrom(s => s.Endereco.Logradouro))
            .ForMember(d => d.Bairro, o => o.MapFrom(s => s.Endereco.Bairro))
            .ForMember(d => d.Cidade, o => o.MapFrom(s => s.Endereco.Cidade))
            .ForMember(d => d.Estado, o => o.MapFrom(s => s.Endereco.Estado));

        CreateMap<ClienteViewModel, Cliente>()
            .ConstructUsing(c => new Cliente(c.Nome.ToUpper(), c.Cpf, c.Cep, c.Logradouro.ToUpper(), c.Bairro.ToUpper(), c.Cidade.ToUpper(), c.Estado.ToUpper()));
    }
}
