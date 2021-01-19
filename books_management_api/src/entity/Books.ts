import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity()
export class Books {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    editora: string;

    @Column()
    autores: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}