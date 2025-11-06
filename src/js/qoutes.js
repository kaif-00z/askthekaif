const quotes = [
    { text: "When I Realized Winning Also Means Destroying Someone's Dream.<br>I Didn't Give up, I just Drifted Out!", author: "kAiF kHaN" },
    { text: "Enjoy, but don't attach;<br>Give, but don't expect;<br>Listen, but don't judge;<br>Love, but don't depend;<br>Accept, but don't settle!", author: "¯\\_(ツ)_/¯" },
    { text: "Behind a man who forgives everything is a man,<br>Who knows the weight of his own sins!", author: "¯\\_(ツ)_/¯" },
    { text: "You prayed for wisdom?<br>That's why you are confused!", author: "KAiF kHaN" },
    { text: "I am laughing at myself, I am also laughing at all of you.<br>Love and friendship, killing and slaughtering,<br>don't you all find this very boring?", author: "Fang Yuan" },
    { text: "Why would insults matter to me?<br>Insults were insults, what could they do?<br>A superficial person would be angry due to curses and would be happy due to praises.<br>Those who lived according to other's point of view were really pitiful.", author: "Fang Yuan"},
    { text: "Betray me, lie to me, take advantage of me but that is your nature.<br>But my kindness? that is mine.<br>And I do not change who I am just because the world fails to meet my expectations.", author: "Fang Yuan"},
    { text: "I am kind when I choose to be<br>Not because you deserve it,<br>Not because I expect anything in return,<br>But because it is my choice.", author: "Fang Yuan"},
    { text: "I refused to be a puppet in a story written by chance,<br>If FATE is a shackle,<br>I'll break it with my own hands!", author: "Fang Yuan"},
    { text: "Wisdom lies in playing the game, not cursing its rules!", author: "Fang Yuan" },
    { text: "I no longer fear monsters in the dark,<br>The real one walks in daylight!", author: "KAiF kHaN"},
    { text: "We are born without reasons, we suffer without meaning, and we die without purpose.<br>The universe doesn't know we exists and it never cared!", author: "Albert Camus"},
    { text: "I would rather let the world down than<br>Be let down by the world!", author: "Fang Yuan"},
];

const q = quotes[Math.floor(Math.random() * quotes.length)];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("quote-text").innerHTML = q.text;
    document.getElementById("quote-author").innerText = "~ " + q.author;
});
