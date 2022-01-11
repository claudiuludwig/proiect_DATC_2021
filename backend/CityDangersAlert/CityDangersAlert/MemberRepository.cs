using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team5StackWonder.Domain.EF;
using Team5StackWonder.Domain.Models;

namespace Team5StackWonder.Infrastructure
{
	public interface IMemberRepository
    {
		List<Member> GetMembers();
		Task AddMember(Member member);
	}
	public class MemberRepository : IMemberRepository
	{
		private readonly AppDBContext _appDBContext;

		public MemberRepository(AppDBContext context)
		{
			_appDBContext = context;
		}

		public List<Member> GetMembers()
		{
			return _appDBContext.Members.ToList();
		}

		public async Task AddMember(Member member)
		{
			await _appDBContext.Members.AddAsync(member);
			await Save();
		}

		private async Task Save()
		{
			await _appDBContext.SaveChangesAsync();
		}
	}
}
