"use client";

import { Button } from "@/components/ui/button";
import { Search, UserPlus } from "lucide-react";
import { mockFriends, mockSuggestions } from "@/data/mock-community";
import { Input } from "../ui/input";
import { useState } from "react";

export default function CommunityFriends() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredUsers = mockFriends.filter((user) => {
    if (!user.username.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div>
      {/* Encabezado */}
      <div className="flex items-center justify-between mb-4 gap-2">
        <h2 className="text-2xl font-bold">My Friends</h2>
        <div className="flex-grow" />
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search users..."
            className="pl-10 bg-blue-800 border-blue-700 text-white placeholder:text-blue-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold flex items-center gap-2">
          <UserPlus className="w-4 h-4" />
          Add Friend
        </Button>
      </div>

      {/* Lista de amigos en dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {filteredUsers.map((friend) => (
          <div
            key={friend.username}
            className="
              flex items-center gap-4 p-4 bg-white/10 rounded
              transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-900/70
              cursor-pointer shadow-md shadow-blue-900/40
            "
          >
            {/* Avatar / Indicador de estado */}
            <div className="relative w-12 h-12 rounded-full bg-white flex-shrink-0">
              <img
                src={friend.imageUrl}
                alt={friend.username}
                className="w-full h-full rounded-full object-cover"
              />
              {/* Indicador de online/offline */}
              {friend.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
              )}
            </div>

            {/* Info del amigo */}
            <div className="flex flex-col">
              <p className="text-white font-semibold">{friend.username}</p>
              <p className="text-sm text-gray-300">
                Lvl {friend.level}{" "}
                {friend.isOnline && (
                  <span className="text-green-400 ml-1">Online now</span>
                )}
              </p>
            </div>

            {/* Botones a la derecha */}
            <div className="ml-auto flex gap-2">
              <Button
                className="
                  bg-white/10 hover:bg-white/20 text-white
                  flex items-center gap-1 px-3 py-1 rounded font-semibold
                  transition-colors
                "
              >
                Visit
              </Button>
              <Button
                className="
                  bg-white/10 hover:bg-white/20 text-white
                  flex items-center gap-1 px-3 py-1 rounded font-semibold
                  transition-colors
                "
              >
                Message
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Sugerencias de amigos (horizontal) */}
      <h3 className="text-lg font-bold mb-4">Friend Suggestions</h3>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {mockSuggestions.map((suggestion) => (
          <div
            key={suggestion.username}
            className="
              flex items-center gap-4 p-4 bg-white/10 rounded
              transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-900/70
              cursor-pointer shadow-md shadow-blue-900/40
              min-w-[220px]
            "
          >
            {/* Avatar / Indicador de estado */}
            <div className="relative w-12 h-12 rounded-full bg-white flex-shrink-0">
              <img
                src={suggestion.imageUrl}
                alt={suggestion.username}
                className="w-full h-full rounded-full object-cover"
              />
              {suggestion.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <p className="text-white font-semibold">{suggestion.username}</p>
              <p className="text-sm text-gray-300">Lvl {suggestion.level}</p>
            </div>

            {/* Botón Add Friend */}
            <div className="ml-auto">
              <Button
                className="
                  bg-green-500 hover:bg-green-600 text-white font-semibold
                  flex items-center gap-1 px-3 py-1 rounded
                "
              >
                <UserPlus className="w-4 h-4" />
                Add
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
