using FluentValidation;

namespace AvaliacaoLinx.Application.ViewModels;

public class ClienteViewModel
{
    public Guid Id { get; set; }
    public string Nome { get; set; }
    public string Cpf { get; set; }
    public string Cep { get; set; }
    public string Logradouro { get; set; }
    public string Bairro { get; set; }
    public string Cidade { get; set; }
    public string Estado { get; set; }
}

public class ClienteViewModelValidator : AbstractValidator<ClienteViewModel>
{
    public ClienteViewModelValidator()
    {
        RuleFor(c => c.Nome).NotEmpty().WithMessage("O nome não foi informado");
        RuleFor(c => c.Cpf).NotEmpty().WithMessage("O CPF não foi informado");
        RuleFor(c => c.Cep).NotEmpty().WithMessage("O CEP não foi informado");
        RuleFor(c => c.Logradouro).NotEmpty().WithMessage("O logradouro não foi informado");
        RuleFor(c => c.Bairro).NotEmpty().WithMessage("O bairro não foi informado");
        RuleFor(c => c.Cidade).NotEmpty().WithMessage("A cidade não foi informada");
        RuleFor(c => c.Estado).NotEmpty().WithMessage("O estado não foi informado");
    }
}
