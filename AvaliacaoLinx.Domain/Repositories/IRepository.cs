using AvaliacaoLinx.Domain.Aggregates;

namespace AvaliacaoLinx.Domain.Repositories;

public interface IRepository<T> : IDisposable where T : AggregateRoot
{
    IUnitOfWork UnitOfWork { get; }
}
