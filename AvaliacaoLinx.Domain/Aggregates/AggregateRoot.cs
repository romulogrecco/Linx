namespace AvaliacaoLinx.Domain.Aggregates;

public abstract class AggregateRoot
{
    public Guid Id { get; set; }

    public AggregateRoot()
    {
        Id = Guid.NewGuid();
    }
}
