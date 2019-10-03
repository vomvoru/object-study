import { Movie } from './Movie';

export class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreended: Date;

  isDiscountable(): boolean {
    return this.movie.getDiscountConditions().some(condition => condition.isDiscountable(this));
  }

  getMovie(): Movie {
    return this.movie;
  }

  setMovie(movie: Movie): void {
    this.movie = movie;
  }

  getSequence(): number {
    return this.sequence;
  }

  setSequence(sequence: number): void {
    this.sequence = sequence;
  }

  getWhenScreended(): Date {
    return this.whenScreended;
  }

  setWhenScreended(whenScreended: Date): void {
    this.whenScreended = whenScreended;
  }
}
