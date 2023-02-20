using AvaliacaoLinx.Domain.Aggregates;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AvaliacaoLinx.Infra.Configurations;

public class ClienteConfiguration : IEntityTypeConfiguration<Cliente>
{
    public void Configure(EntityTypeBuilder<Cliente> builder)
    {
        builder.ToTable("Clientes");

        builder.HasKey(c => c.Id);

        builder.Property(c => c.Nome).HasMaxLength(200).IsRequired();
        builder.Property(c => c.Cpf).HasMaxLength(11).IsRequired();

        builder.OwnsOne(c => c.Endereco, e =>
        {
            e.Property(x => x.Cep).HasColumnName("Cep").HasMaxLength(8).IsRequired();
            e.Property(x => x.Logradouro).HasColumnName("Logradouro").HasMaxLength(200).IsRequired();
            e.Property(x => x.Bairro).HasColumnName("Bairro").HasMaxLength(200).IsRequired();
            e.Property(x => x.Estado).HasColumnName("Estado").HasMaxLength(2).IsRequired();
            e.Property(x => x.Cidade).HasColumnName("Cidade").HasMaxLength(2).IsRequired();
        });

        
    }
}
