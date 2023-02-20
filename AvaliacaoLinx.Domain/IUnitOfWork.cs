namespace AvaliacaoLinx.Domain;

public interface IUnitOfWork
{
    Task<bool> CommitAsync();
}
