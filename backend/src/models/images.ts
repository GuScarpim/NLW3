import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orphanage from './Opharnage';

@Entity('images') // associada a tabela 
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column() //Coluna
  path: string;

  @ManyToOne(() => Orphanage, orphanage => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage;
}