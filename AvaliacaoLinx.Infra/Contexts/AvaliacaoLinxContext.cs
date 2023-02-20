using AvaliacaoLinx.Domain;
using AvaliacaoLinx.Domain.Aggregates;
using Microsoft.EntityFrameworkCore;

namespace AvaliacaoLinx.Infra.Contexts;

public class AvaliacaoLinxContext : DbContext, IUnitOfWork
{
	public AvaliacaoLinxContext(DbContextOptions<AvaliacaoLinxContext> options) : base(options)
	{
	}

	public DbSet<Cliente> Clientes { get; set; }

	protected override void OnModelCreating(ModelBuilder modelBuilder)
	{
		modelBuilder.ApplyConfigurationsFromAssembly(typeof(AvaliacaoLinxContext).Assembly);

    }

    public async Task<bool> CommitAsync()
    {
        return await base.SaveChangesAsync() > 0;
    }
}
