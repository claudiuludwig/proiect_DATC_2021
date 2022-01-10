export interface CardListItem
{
    cardId: number;
    cardImage?: string;
    cardTitle?: string;
    cardSubtitle?: string;
    cardVotes?: number;
}

export interface MemberListItem
{
    memberId: number;
    memberFirstName?: string;
    memberName?: string;
    memberEmail?: string;
    memberPoints?: number;
    memberCode?: number;
    memberPhone?: number;
}