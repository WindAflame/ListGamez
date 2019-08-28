import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game, DownloadLinkType } from 'src/app/_other/game.class';
import { GameService } from 'src/app/_other/game.service';

@Component({
    selector: 'app-article-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

    public DownloadLinkType = DownloadLinkType;
    public game: Game;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private gameS: GameService
    ) { }

    ngOnInit() {
        this.loadGame();
        this.navigateToHomeIfGameNotExist();
    }

    private loadGame() {
        this.game = this.gameS.getGameById(this.route.snapshot.paramMap.get('id'));
    }

    private navigateToHomeIfGameNotExist() {
        if (!this.game) {
            this.router.navigateByUrl('/');
        }
    }

}
