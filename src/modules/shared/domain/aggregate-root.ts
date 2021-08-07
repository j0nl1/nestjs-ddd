import Event from './event.interface';

const INTERNAL_EVENTS = Symbol();

export default abstract class AggregateRoot {
  private readonly [INTERNAL_EVENTS]: Event[] = [];

  public pullDomainEvents(): Event[] {
    const events = [...this[INTERNAL_EVENTS]];
    this[INTERNAL_EVENTS].length = 0;
    return events;
  }

  public record(event: Event): void {
    this[INTERNAL_EVENTS].push(event);
  }
}
